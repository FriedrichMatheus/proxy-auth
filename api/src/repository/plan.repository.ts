import { Decimal } from "@prisma/client/runtime/library";
import { db } from "../configs/prisma.config";
import { Plan } from "@prisma/client";

export class PlanRepository {
  async create(plan: Plan) {
    return await db.plan.create({ data: plan });
  }

  async update(plan: Plan) {
    return await db.plan.update({
      data: plan,
      where: {
        id: plan.id,
      },
    });
  }

  async findAll() {
    return await db.plan.findMany();
  }

  async findById(id: number) {
    return await db.plan.findUnique({ where: { id } });
  }

  async findByCoupon(coupon: string) {
    return await db.plan.findFirst({ where: { coupon } });
  }

  async updateUserPlan(
    userId: number,
    updateData: { planStartAt: Date; planEndAt: Date }
  ) {
    return await db.user.update({
      where: { id: userId },
      data: updateData,
    });
  }

  async createPlanHistory(userId: number, planId: number) {
    return await db.planHistory.create({
      data: { userId, planId },
    });
  }
}
