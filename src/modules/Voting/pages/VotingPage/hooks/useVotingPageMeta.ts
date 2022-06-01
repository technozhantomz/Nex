import counterpart from "counterpart";
import { useEffect, useState } from "react";

import { PageMeta } from "../../../../../common/types";

import { VotingPageMeta } from "./useVotingPageMeta.types";

export function useVotingPageMeta(tab?: string): VotingPageMeta {
  const [pageMeta, setPageMeta] = useState<PageMeta>({
    title: "PeerPlays (GPOS)",
    heading: counterpart.translate(`pages.voting.peerplays_gpos`),
    description: "PeerPlays (GPOS) | ",
  });

  useEffect(() => {
    switch (tab) {
      case "gpos":
        setPageMeta({
          title: "PeerPlays (GPOS)",
          heading: counterpart.translate(`pages.voting.peerplays_gpos`),
          description: "PeerPlays (GPOS)",
        });
        break;
      case "witnesses":
        setPageMeta({
          title: "PeerPlays Voting",
          heading: counterpart.translate(`pages.voting.peerplays_voting`),
          description: "PeerPlays Voting | Witness",
        });
        break;
      case "sons":
        setPageMeta({
          title: "PeerPlays Voting",
          heading: counterpart.translate(`pages.voting.peerplays_voting`),
          description: "PeerPlays Voting | SONs",
        });
        break;
      case "committees":
        setPageMeta({
          title: "PeerPlays Voting",
          heading: counterpart.translate(`pages.voting.peerplays_voting`),
          description: "PeerPlays Voting | Committee",
        });
        break;
      case "proxy":
        setPageMeta({
          title: "PeerPlays Voting",
          heading: counterpart.translate(`pages.voting.peerplays_voting`),
          description: "PeerPlays Voting | Proxy",
        });
        break;
      default:
        setPageMeta({
          title: "PeerPlays (GPOS)",
          heading: counterpart.translate(`pages.voting.peerplays_gpos`),
          description: "PeerPlays (GPOS)",
        });
        break;
    }
  }, [tab]);

  return { pageMeta };
}
