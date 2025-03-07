import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../init";
export const appRouter = createTRPCRouter({
  hello: protectedProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      return {
        greeting: `hello ${ctx.user.name}`,
      };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
