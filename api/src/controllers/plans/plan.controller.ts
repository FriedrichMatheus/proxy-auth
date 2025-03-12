import { FastifyRequest, FastifyReply } from "fastify";
import { PlanService } from "../../service/plan.service";

export class PlanController {
  constructor(private readonly planService: PlanService) {}
}
