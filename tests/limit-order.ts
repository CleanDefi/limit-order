import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { LimitOrder } from "../target/types/limit_order";

describe("limit-order", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.LimitOrder as Program<LimitOrder>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
