// index.d.ts

import { Application } from "express";

declare module "list_end_points" {
  export default function listEndpoints(app: Application): void;
}
