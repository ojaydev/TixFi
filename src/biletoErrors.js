// List of errors and respective messages issued by Bileto.

const BILETO_ERRORS = {
    E001: "ticket store must be open",
    E002: "invalid event ID",
    E003: "invalid purchase ID",
    E004: "must be triggered by event organizer",
    E005: "must be triggered by event organizer or store owner",
    E006: "ticket purchase have to be completed",
    E007: "store name must not be empty",
    E008: "only funds transfer (i.e. no data) accepted on fallback",
    E009: "ticket store must be created or suspended",
    E010: "ticket store cannot be closed",
    E011: "ticket store refundable balance must be zero",
    E012: "organizer address must refer to an account (i.e. not a contract)",
    E013: "ticket event external ID must not be empty",
    E014: "ticket event name must not be empty",
    E015: "store incentive must be between 0 and 100%",
    E016: "number of tickets available for sale cannot be zero",
    E017: "event status must be created or with ticket sales suspended",
    E018: "event ticket sales must have started",
    E019: "event ticket sales must have started or be suspended",
    E020: "event ticket sales must have finished",
    E021: "event must have been completed",
    E022: "event status must be created or not completed",
    E023: "event ticket sales have to had started",
    E024: "customer address must refer to an account (i.e. not a contract)",
    E025: "quantity of tickets must be greater than zero",
    E026: "not enough tickets left. please change quantity",
    E027: "purchase external ID must not be empty",
    E028: "purchase date must be provided (not zero)",
    E029: "customer ID cannot be empty",
    E030: "customer funds must be equal to purchase total",
    E031: "event status must allow cancellation",
    E032: "purchase cancellation must be initiated by customer",
    E033: "hash of customer ID must match with stored one",
    E034: "hash of purchase external ID must match with stored one",
    E035: "ticket purchase have to be cancelled",
    E036: "event ticket sales should be started/suspended/finished",
    E037: "check-in request must be initiated by customer",
    E038: "must be triggered by customer, event organizer or store owner",
    E039: "not allowed to retrieve information (not owner or organizer)",
    E040: "organizer has not created events yet",
    E041: "invalid index (organizerEvents)",
    E042: "not allowed to retrieve information (not owner or customer)",
    E043: "customer has not purchased tickets yet",
    E044: "invalid index (customerPurchases)",
    E045: "invalid index (organizers)",
    E046: "invalid index (customers)"
};
