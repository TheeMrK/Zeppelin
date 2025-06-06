import { WebhookClient } from "discord.js";
import { BasePluginType } from "knub";
import { z } from "zod/v4";
import { Queue } from "../../Queue.js";
import { Webhooks } from "../../data/Webhooks.js";

export const zInternalPosterConfig = z.strictObject({}).default({});

export interface InternalPosterPluginType extends BasePluginType {
  configSchema: typeof zInternalPosterConfig;
  state: {
    queue: Queue;
    webhooks: Webhooks;
    missingPermissions: boolean;
    webhookClientCache: Map<string, WebhookClient | null>;
  };
}
