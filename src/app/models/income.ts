import { FreelancerProjectContract } from "./project";

export interface Income extends FreelancerProjectContract{
    income: number;
    serviceFee: number;
}