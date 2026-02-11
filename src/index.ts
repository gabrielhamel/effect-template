import { NodeContext, NodeRuntime } from "@effect/platform-node";
import { Effect } from "effect";
import { makeOpenTelemetryLayer } from "./infra/openTelemetry.js";

const entrypoint = (): Effect.Effect<void> => {
  return Effect.log("Hello world !");
};

Effect.gen(function*() {
  const openTelemetry = yield* makeOpenTelemetryLayer;

  return yield* entrypoint().pipe(Effect.provide(openTelemetry));
}).pipe(
  Effect.provide(NodeContext.layer),
  NodeRuntime.runMain,
);
