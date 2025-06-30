import { authenticationAgent } from './authentication';
import { returnsAgent } from './returns';
import { salesAgent } from './sales';
import { simulatedHumanAgent } from './simulatedHuman';
import { cindyAgent } from './cindy';

// Cast to `any` to satisfy TypeScript until the core types make RealtimeAgent
// assignable to `Agent<unknown>` (current library versions are invariant on
// the context type).
(authenticationAgent.handoffs as any).push(returnsAgent, salesAgent, simulatedHumanAgent, cindyAgent);
(returnsAgent.handoffs as any).push(authenticationAgent, salesAgent, simulatedHumanAgent, cindyAgent);
(salesAgent.handoffs as any).push(authenticationAgent, returnsAgent, simulatedHumanAgent, cindyAgent);
(simulatedHumanAgent.handoffs as any).push(authenticationAgent, returnsAgent, salesAgent, cindyAgent);
(cindyAgent.handoffs as any).push(authenticationAgent, returnsAgent, salesAgent, simulatedHumanAgent);

export const customerServiceRetailScenario = [
  authenticationAgent,
  returnsAgent,
  salesAgent,
  simulatedHumanAgent,
  cindyAgent,
];

// Name of the company represented by this agent set. Used by guardrails
export const customerServiceRetailCompanyName = 'Snowy Peak Boards';
