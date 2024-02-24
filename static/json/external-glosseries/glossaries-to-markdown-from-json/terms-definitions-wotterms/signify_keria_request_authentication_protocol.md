## signify keria request authentication protocol

<h4>Definition</h4><p>SKRAP is a client to the KERIA server. Mobile clients will be using SKRAP to connect to KERI <a href="AID">AID</a>s via <a href="agent">agent</a>s in the new, multi-tenant Mark II Agent server, <a href="keria">KERIA</a>. Also, browser extensions will use SKRAP in order to use a wallet similar to <em>MetaMask</em>, except it will be KERIMask, and it will be a browser extension.<a href="KERIMask">KERIMask</a> will connect to KERIA servers in order for a person to control AIDs from their browser extension.</p><p>SKRAP is also usable from HSMs and hardware wallets because the keys from the hardware wallet, along with some app code, connect through SKRAP to agents running in a KERIA server.</p><p><a href="signify">Signify</a> signs things at the edge. This includes <a href="ACDC">ACDC</a>s. KERIA will be used to send communications between agents. The things KERIA sends are signed by Signify.  </p><p>Source: Kent Bull in KERI Slack May 2023</p><h4>Related to KERIA</h4><p>The KERIA service will expose 3 separate HTTP endpoints on 3 separate network interfaces.</p><ol><li>Boot Interface - Exposes one endpoint for Agent Worker initialization.</li><li>Admin Interface - The REST API for command and control operations from the Signify Client.</li><li>KERI Protocol Interface - CESR over HTTP endpoint for KERI protocol interactions with the rest of the world.</li></ol><p>This separation allows for the Boot interface to be expose to internal infrastructure only (or disabled all together) while exposing the other two interfaces externally. If a KERIA instance is launched in static worker mode, meaning all agent workers are configured at start up only the Boot interface can be disabled completely.<br>More at source <a href="https://github.com/WebOfTrust/signify/blob/main/protocol.md">Github Signify</a></p>
