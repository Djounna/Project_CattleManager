import { JwtPayload } from "jwt-decode";

export interface cmJwtPayload extends JwtPayload{
  'cattlemanager/roles': string[]; 
  permissions: string[];
  sub: string;
}