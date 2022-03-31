export type Block = {
  id?: number;
  extensions: any[];
  next_secret_hash?: string;
  previous: string;
  previous_secret: string;
  timestamp: string | Date;
  transaction_merkle_root: string;
  transactions: any[];
  witness: string;
  witness_account_name: string;
  witness_signature: string;
};

export type Chain = {
  accounts_registered_this_interval: number;
  current_aslot: number;
  current_witness: string;
  dynamic_flags: number;
  head_block_id: string;
  head_block_number: number;
  id: string;
  last_budget_time: string;
  last_irreversible_block_num: number;
  last_son_payment_time: string;
  next_maintenance_time: string;
  recent_slots_filled: string;
  recently_missed_count: number;
  son_budget: number;
  time: string;
  witness_budget: number;
};

export type BlockData = {
  active_committee_members: string[];
  active_sons: any[];
  active_witnesses: string[];
  id: string;
  next_available_vote_id: number;
  parameters: BlockDataParameters;
};

export type Dynamic = {
  accumulated_fees: number;
  confidential_supply: number;
  current_supply: string;
  fee_pool: number;
  id: string;
};

export type BlockDataParameters = {
  current_fees: {
    parameters: unknown[];
    scale: number;
  };
  block_interval: number;
  maintenance_interval: number;
  maintenance_skip_slots: number;
  committee_proposal_review_period: number;
  maximum_transaction_size: number;
  maximum_block_size: number;
  maximum_time_until_expiration: number;
  maximum_proposal_lifetime: number;
  maximum_asset_whitelist_authorities: number;
  maximum_asset_feed_publishers: number;
  maximum_witness_count: number;
  maximum_committee_count: number;
  maximum_authority_membership: number;
  reserve_percent_of_fee: number;
  network_percent_of_fee: number;
  lifetime_referrer_percent_of_fee: number;
  cashback_vesting_period_seconds: number;
  cashback_vesting_threshold: number;
  count_non_member_votes: boolean;
  allow_non_member_whitelists: boolean;
  witness_pay_per_block: number;
  worker_budget_per_day: string;
  max_predicate_opcode: number;
  fee_liquidation_threshold: number;
  accounts_per_fee_scale: number;
  account_fee_scale_bitshifts: number;
  max_authority_depth: number;
  witness_schedule_algorithm: number;
  min_round_delay: number;
  max_round_delay: number;
  min_time_per_commit_move: number;
  max_time_per_commit_move: number;
  min_time_per_reveal_move: number;
  max_time_per_reveal_move: number;
  rake_fee_percentage: number;
  maximum_registration_deadline: number;
  maximum_players_in_tournament: number;
  maximum_tournament_whitelist_length: number;
  maximum_tournament_start_time_in_future: number;
  maximum_tournament_start_delay: number;
  maximum_tournament_number_of_wins: number;
  extensions: {
    sweeps_distribution_percentage: number;
    sweeps_distribution_asset: string;
    sweeps_vesting_accumulator_account: string;
    gpos_period: number;
    gpos_subperiod: number;
    gpos_period_start: number;
    gpos_vesting_lockin_period: number;
    rbac_max_permissions_per_account: number;
    rbac_max_account_authority_lifetime: number;
    rbac_max_authorities_per_permission: number;
    account_roles_max_per_account: number;
    account_roles_max_lifetime: number;
    son_vesting_amount: number;
    son_vesting_period: number;
    son_pay_max: number;
    son_pay_time: number;
    son_deregister_time: number;
    son_heartbeat_frequency: number;
    son_down_time: number;
    son_bitcoin_min_tx_confirmations: number;
    son_account: string;
    btc_asset: string;
    maximum_son_count: number;
    hbd_asset: string;
    hive_asset: string;
  };
};
