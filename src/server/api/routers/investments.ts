import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { db } from "~/server/db";

export const InvestmentsRouter = createTRPCRouter({
  getAll: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.investment.findMany({ where: { userId: input.userId } });
    }),
  createInvestment: protectedProcedure
    .input(z.object({ userId: z.string(), value: z.number() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.investment.create({
        data: { userId: input.userId, value: input.value },
      });
    }),
});
