import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

interface EnvironmentConfig {
  baseUrl: string;
}

export function getConfig(): EnvironmentConfig {
  const environment = process.env.TEST_ENV || "development";
  const configPath = path.resolve(__dirname, "../config/environments.json");
  const configFile = fs.readFileSync(configPath, "utf-8");
  const config = JSON.parse(configFile);

  if (!(environment in config)) {
    throw new Error(`Environment ${environment} not found in configuration`);
  }

  return config[environment];
}
