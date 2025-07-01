import { authenticationAgent } from './authentication';
import { returnsAgent } from './returns';
import { salesAgent } from './sales';
import { simulatedHumanAgent } from './simulatedHuman';
import { cindyAgent as cindyAsh } from './cindy';
import { cindyAgent as cindyAlloy } from './cindyAlloy';
import { cindyAgent as cindyBallad } from './cindyBallad';
import { cindyAgent as cindyCoral } from './cindyCoral';
import { cindyAgent as cindyEcho } from './cindyEcho';
import { cindyAgent as cindySage } from './cindySage';
import { cindyAgent as cindyShimmer } from './cindyShimmer';
import { cindyAgent as cindyVerse } from './cindyVerse';

// Cast to `any` to satisfy TypeScript until the core types make RealtimeAgent
// assignable to `Agent<unknown>` (current library versions are invariant on
// the context type).
(authenticationAgent.handoffs as any).push(returnsAgent, salesAgent, simulatedHumanAgent, cindyAsh);
(returnsAgent.handoffs as any).push(authenticationAgent, salesAgent, simulatedHumanAgent, cindyAsh);
(salesAgent.handoffs as any).push(authenticationAgent, returnsAgent, simulatedHumanAgent, cindyAsh);
(simulatedHumanAgent.handoffs as any).push(authenticationAgent, returnsAgent, salesAgent, cindyAsh);
(cindyAsh.handoffs as any).push(authenticationAgent, returnsAgent, salesAgent, simulatedHumanAgent);

export const customerServiceRetailScenario = [
  authenticationAgent,
  returnsAgent,
  salesAgent,
  simulatedHumanAgent,
  cindyAsh,
  cindyAlloy,
  cindyBallad,
  cindyCoral,
  cindyEcho,
  cindySage,
  cindyShimmer,
  cindyVerse,
];

// Name of the company represented by this agent set. Used by guardrails
export const customerServiceRetailCompanyName = 'Snowy Peak Boards';
