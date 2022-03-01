/** @format */
import express, { Response as ExResponse, Request as ExRequest, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';
import cors from 'cors';
import { RegisterRoutes } from '../generated/routes';
import { GenericErrorMiddleware } from './errors';

const openapiHtml = fs.readFileSync(
  path.resolve(process.cwd(), './generated/openapi.html'),
  'utf-8',
);

export const app = express();

// Enable CORS in dev
if (process.env.NODE_ENV === 'development') {
  app.use(cors());
}

// Use body parser to read sent json payloads
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

// Serve OpenAPI UI
app.get('/docs', (_req: ExRequest, res: ExResponse) => {
  console.log('conditional deploy test; remove me');
  res.set('Content-Type', 'text/html');
  return res.send(openapiHtml);
});

// Serve OpenAPI Spec
app.get('/api-spec', (_req: ExRequest, res: ExResponse, next: NextFunction) => {
  import('../generated/swagger.json').then(x => res.send(x)).catch(next);
});

// Health check
app.get('/health', (_, res) => res.send('Healthy'));

// Register tsoa
RegisterRoutes(app);

// Register custom error middleware
GenericErrorMiddleware(app);
