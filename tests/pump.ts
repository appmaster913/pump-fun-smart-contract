import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Pump } from "../target/types/pump"
console.log('p')
describe("pump", () => {
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Pump as Program<Pump>;

});