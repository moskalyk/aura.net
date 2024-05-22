import {Fluence, kras} from '@fluencelabs/js-client'
//@ts-ignore
import { split, join } from 'shamir'

/* eslint-disable */
// @ts-nocheck
/**
 *
 * This file is generated using:
 * @fluencelabs/aqua-api version: 0.13.0
 * @fluencelabs/aqua-to-js version: 0.3.5
 * If you find any bugs in generated AIR, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * If you find any bugs in generated JS/TS, please write an issue on GitHub: https://github.com/fluencelabs/js-client/issues
 *
 */
import type { IFluenceClient as IFluenceClient$$, ParticleContext as ParticleContext$$ } from '@fluencelabs/js-client';

// Making aliases to reduce chance of accidental name collision
import {
    v5_callFunction as callFunction$$,
    v5_registerService as registerService$$
} from '@fluencelabs/js-client';

// Services
export interface GatewayServiceDef {
    connect: (username: string, password: string, callParams: ParticleContext$$) => boolean | Promise<boolean>;
    registerNode: (peer_id: string, callParams: ParticleContext$$) => boolean | Promise<boolean>;
    signIn: (username: string, password: string, callParams: ParticleContext$$) => { next_peers: string[]; shares: string[]; username: string; } | Promise<{ next_peers: string[]; shares: string[]; username: string; }>;
}
export function registerGatewayService(service: GatewayServiceDef): void;
export function registerGatewayService(serviceId: string, service: GatewayServiceDef): void;
export function registerGatewayService(peer: IFluenceClient$$, service: GatewayServiceDef): void;
export function registerGatewayService(peer: IFluenceClient$$, serviceId: string, service: GatewayServiceDef): void;
export function registerGatewayService(...args: any) {
    registerService$$(
        args,
        {
    "defaultServiceId": "gatewayService",
    "functions": {
        "fields": {
            "connect": {
                "domain": {
                    "fields": {
                        "username": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "password": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "bool",
                            "tag": "scalar"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            },
            "registerNode": {
                "domain": {
                    "fields": {
                        "peer_id": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "bool",
                            "tag": "scalar"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            },
            "signIn": {
                "domain": {
                    "fields": {
                        "username": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "password": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "HopPacket",
                            "fields": {
                                "next_peers": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "shares": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "username": {
                                    "name": "string",
                                    "tag": "scalar"
                                }
                            },
                            "tag": "struct"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            }
        },
        "tag": "labeledProduct"
    }
}
    );
}

export interface AuraServiceDef {
    retrieveShare: (username: string, hop_packet: { next_peers: string[]; shares: string[]; username: string; }, callParams: ParticleContext$$) => { next_peers: string[]; shares: string[]; username: string; } | Promise<{ next_peers: string[]; shares: string[]; username: string; }>;
    writeAuraShare: (init_peer_id: string, username: string, share: string, holding_peers: string[], callParams: ParticleContext$$) => boolean | Promise<boolean>;
}
export function registerAuraService(service: AuraServiceDef): void;
export function registerAuraService(serviceId: string, service: AuraServiceDef): void;
export function registerAuraService(peer: IFluenceClient$$, service: AuraServiceDef): void;
export function registerAuraService(peer: IFluenceClient$$, serviceId: string, service: AuraServiceDef): void;
export function registerAuraService(...args: any) {
    registerService$$(
        args,
        {
    "defaultServiceId": "auraService",
    "functions": {
        "fields": {
            "retrieveShare": {
                "domain": {
                    "fields": {
                        "username": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "hop_packet": {
                            "name": "HopPacket",
                            "fields": {
                                "next_peers": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "shares": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "username": {
                                    "name": "string",
                                    "tag": "scalar"
                                }
                            },
                            "tag": "struct"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "HopPacket",
                            "fields": {
                                "next_peers": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "shares": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "username": {
                                    "name": "string",
                                    "tag": "scalar"
                                }
                            },
                            "tag": "struct"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            },
            "writeAuraShare": {
                "domain": {
                    "fields": {
                        "init_peer_id": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "username": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "share": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "holding_peers": {
                            "type": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "tag": "array"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "bool",
                            "tag": "scalar"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            }
        },
        "tag": "labeledProduct"
    }
}
    );
}


// Functions
export const register_script = `
(xor
 (seq
  (seq
   (seq
    (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
    (call %init_peer_id% ("getDataSrv" "hub_peer_id") [] -hub_peer_id-arg-)
   )
   (xor
    (seq
     (seq
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
      (call -hub_peer_id-arg- ("gatewayService" "registerNode") [%init_peer_id%] ret)
     )
     (new $-ephemeral-stream-
      (new #-ephemeral-canon-
       (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
      )
     )
    )
    (seq
     (seq
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
     )
     (fail :error:)
    )
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [ret])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type RegisterParams = [hub_peer_id: string, config?: {ttl?: number}] | [peer: IFluenceClient$$, hub_peer_id: string, config?: {ttl?: number}];

export type RegisterResult = Promise<boolean>;

export function register(...args: any): any {
    return callFunction$$(
        args,
        {
    "functionName": "register",
    "arrow": {
        "domain": {
            "fields": {
                "hub_peer_id": {
                    "name": "string",
                    "tag": "scalar"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "bool",
                    "tag": "scalar"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        register_script
    );
}

export const alignShare_script = `
(xor
 (seq
  (seq
   (seq
    (seq
     (seq
      (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
      (call %init_peer_id% ("getDataSrv" "peer_id") [] -peer_id-arg-)
     )
     (call %init_peer_id% ("getDataSrv" "username") [] -username-arg-)
    )
    (call %init_peer_id% ("getDataSrv" "hop_packet") [] -hop_packet-arg-)
   )
   (xor
    (seq
     (seq
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
      (call -peer_id-arg- ("auraService" "retrieveShare") [-username-arg- -hop_packet-arg-] ret)
     )
     (new $-ephemeral-stream-
      (new #-ephemeral-canon-
       (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
      )
     )
    )
    (seq
     (seq
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
     )
     (fail :error:)
    )
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [ret])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type AlignShareArgHop_packet = { next_peers: string[]; shares: string[]; username: string; }

export type AlignShareResultType = { next_peers: string[]; shares: string[]; username: string; }

export type AlignShareParams = [peer_id: string, username: string, hop_packet: AlignShareArgHop_packet, config?: {ttl?: number}] | [peer: IFluenceClient$$, peer_id: string, username: string, hop_packet: AlignShareArgHop_packet, config?: {ttl?: number}];

export type AlignShareResult = Promise<AlignShareResultType>;

export function alignShare(...args: any): any {
    return callFunction$$(
        args,
        {
    "functionName": "alignShare",
    "arrow": {
        "domain": {
            "fields": {
                "peer_id": {
                    "name": "string",
                    "tag": "scalar"
                },
                "username": {
                    "name": "string",
                    "tag": "scalar"
                },
                "hop_packet": {
                    "name": "HopPacket",
                    "fields": {
                        "next_peers": {
                            "type": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "tag": "array"
                        },
                        "shares": {
                            "type": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "tag": "array"
                        },
                        "username": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "struct"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "HopPacket",
                    "fields": {
                        "next_peers": {
                            "type": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "tag": "array"
                        },
                        "shares": {
                            "type": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "tag": "array"
                        },
                        "username": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "struct"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        alignShare_script
    );
}

export const signIn_script = `
(xor
 (seq
  (seq
   (seq
    (seq
     (seq
      (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
      (call %init_peer_id% ("getDataSrv" "hub_peer_id") [] -hub_peer_id-arg-)
     )
     (call %init_peer_id% ("getDataSrv" "username") [] -username-arg-)
    )
    (call %init_peer_id% ("getDataSrv" "password") [] -password-arg-)
   )
   (new $sign_up
    (new $first_hop_res
     (new $middle_hop
      (new $sign_in
       (new $terminal_hop_res
        (seq
         (seq
          (seq
           (seq
            (seq
             (seq
              (seq
               (xor
                (seq
                 (seq
                  (new $-ephemeral-stream-
                   (new #-ephemeral-canon-
                    (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                   )
                  )
                  (call -hub_peer_id-arg- ("gatewayService" "connect") [-username-arg- -password-arg-] ret)
                 )
                 (new $-ephemeral-stream-
                  (new #-ephemeral-canon-
                   (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                  )
                 )
                )
                (seq
                 (seq
                  (new $-ephemeral-stream-
                   (new #-ephemeral-canon-
                    (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                   )
                  )
                  (new $-ephemeral-stream-
                   (new #-ephemeral-canon-
                    (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
                   )
                  )
                 )
                 (fail :error:)
                )
               )
               (ap ret $sign_up)
              )
              (xor
               (seq
                (seq
                 (seq
                  (new $-ephemeral-stream-
                   (new #-ephemeral-canon-
                    (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                   )
                  )
                  (call -hub_peer_id-arg- ("gatewayService" "signIn") [-username-arg- -password-arg-] ret-0)
                 )
                 (ap ret-0 $sign_in)
                )
                (new $-ephemeral-stream-
                 (new #-ephemeral-canon-
                  (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                 )
                )
               )
               (seq
                (seq
                 (new $-ephemeral-stream-
                  (new #-ephemeral-canon-
                   (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                  )
                 )
                 (new $-ephemeral-stream-
                  (new #-ephemeral-canon-
                   (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
                  )
                 )
                )
                (fail :error:)
               )
              )
             )
             (xor
              (seq
               (seq
                (par
                 (seq
                  (new $sign_in_test
                   (seq
                    (seq
                     (fold $sign_in sign_in_fold_var
                      (seq
                       (seq
                        (ap sign_in_fold_var $sign_in_test)
                        (canon %init_peer_id% $sign_in_test  #sign_in_iter_canon)
                       )
                       (xor
                        (match #sign_in_iter_canon.length 1
                         (null)
                        )
                        (next sign_in_fold_var)
                       )
                      )
                      (never)
                     )
                     (canon %init_peer_id% $sign_in_test  #sign_in_result_canon)
                    )
                    (ap #sign_in_result_canon sign_in_gate)
                   )
                  )
                  (new $-ephemeral-stream-
                   (new #-ephemeral-canon-
                    (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                   )
                  )
                 )
                 (seq
                  (new $sign_in_test-0
                   (seq
                    (seq
                     (fold $sign_in sign_in_fold_var-0
                      (seq
                       (seq
                        (ap sign_in_fold_var-0 $sign_in_test-0)
                        (canon %init_peer_id% $sign_in_test-0  #sign_in_iter_canon-0)
                       )
                       (xor
                        (match #sign_in_iter_canon-0.length 1
                         (null)
                        )
                        (next sign_in_fold_var-0)
                       )
                      )
                      (never)
                     )
                     (canon %init_peer_id% $sign_in_test-0  #sign_in_result_canon-0)
                    )
                    (ap #sign_in_result_canon-0 sign_in_gate-0)
                   )
                  )
                  (new $-ephemeral-stream-
                   (new #-ephemeral-canon-
                    (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                   )
                  )
                 )
                )
                (xor
                 (seq
                  (seq
                   (new $-ephemeral-stream-
                    (new #-ephemeral-canon-
                     (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                    )
                   )
                   (call sign_in_gate.$.[0].next_peers.[0] ("auraService" "retrieveShare") [-username-arg- sign_in_gate-0.$.[0]] ret-1)
                  )
                  (new $-ephemeral-stream-
                   (new #-ephemeral-canon-
                    (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                   )
                  )
                 )
                 (seq
                  (seq
                   (new $-ephemeral-stream-
                    (new #-ephemeral-canon-
                     (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                    )
                   )
                   (new $-ephemeral-stream-
                    (new #-ephemeral-canon-
                     (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
                    )
                   )
                  )
                  (fail :error:)
                 )
                )
               )
               (ap ret-1 $first_hop_res)
              )
              (seq
               (seq
                (par
                 (seq
                  (new $sign_in_test-1
                   (seq
                    (seq
                     (fold $sign_in sign_in_fold_var-1
                      (seq
                       (seq
                        (ap sign_in_fold_var-1 $sign_in_test-1)
                        (canon %init_peer_id% $sign_in_test-1  #sign_in_iter_canon-1)
                       )
                       (xor
                        (match #sign_in_iter_canon-1.length 1
                         (null)
                        )
                        (next sign_in_fold_var-1)
                       )
                      )
                      (never)
                     )
                     (canon %init_peer_id% $sign_in_test-1  #sign_in_result_canon-1)
                    )
                    (ap #sign_in_result_canon-1 sign_in_gate-1)
                   )
                  )
                  (new $-ephemeral-stream-
                   (new #-ephemeral-canon-
                    (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                   )
                  )
                 )
                 (seq
                  (new $sign_in_test-2
                   (seq
                    (seq
                     (fold $sign_in sign_in_fold_var-2
                      (seq
                       (seq
                        (ap sign_in_fold_var-2 $sign_in_test-2)
                        (canon %init_peer_id% $sign_in_test-2  #sign_in_iter_canon-2)
                       )
                       (xor
                        (match #sign_in_iter_canon-2.length 1
                         (null)
                        )
                        (next sign_in_fold_var-2)
                       )
                      )
                      (never)
                     )
                     (canon %init_peer_id% $sign_in_test-2  #sign_in_result_canon-2)
                    )
                    (ap #sign_in_result_canon-2 sign_in_gate-2)
                   )
                  )
                  (new $-ephemeral-stream-
                   (new #-ephemeral-canon-
                    (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                   )
                  )
                 )
                )
                (xor
                 (seq
                  (seq
                   (new $-ephemeral-stream-
                    (new #-ephemeral-canon-
                     (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                    )
                   )
                   (call sign_in_gate-1.$.[0].next_peers.[1] ("auraService" "retrieveShare") [-username-arg- sign_in_gate-2.$.[0]] ret-2)
                  )
                  (new $-ephemeral-stream-
                   (new #-ephemeral-canon-
                    (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                   )
                  )
                 )
                 (seq
                  (seq
                   (new $-ephemeral-stream-
                    (new #-ephemeral-canon-
                     (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                    )
                   )
                   (new $-ephemeral-stream-
                    (new #-ephemeral-canon-
                     (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
                    )
                   )
                  )
                  (fail :error:)
                 )
                )
               )
               (ap ret-2 $first_hop_res)
              )
             )
            )
            (xor
             (seq
              (seq
               (par
                (seq
                 (new $first_hop_res_test
                  (seq
                   (seq
                    (fold $first_hop_res first_hop_res_fold_var
                     (seq
                      (seq
                       (ap first_hop_res_fold_var $first_hop_res_test)
                       (canon %init_peer_id% $first_hop_res_test  #first_hop_res_iter_canon)
                      )
                      (xor
                       (match #first_hop_res_iter_canon.length 1
                        (null)
                       )
                       (next first_hop_res_fold_var)
                      )
                     )
                     (never)
                    )
                    (canon %init_peer_id% $first_hop_res_test  #first_hop_res_result_canon)
                   )
                   (ap #first_hop_res_result_canon first_hop_res_gate)
                  )
                 )
                 (new $-ephemeral-stream-
                  (new #-ephemeral-canon-
                   (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                  )
                 )
                )
                (seq
                 (new $first_hop_res_test-0
                  (seq
                   (seq
                    (fold $first_hop_res first_hop_res_fold_var-0
                     (seq
                      (seq
                       (ap first_hop_res_fold_var-0 $first_hop_res_test-0)
                       (canon %init_peer_id% $first_hop_res_test-0  #first_hop_res_iter_canon-0)
                      )
                      (xor
                       (match #first_hop_res_iter_canon-0.length 1
                        (null)
                       )
                       (next first_hop_res_fold_var-0)
                      )
                     )
                     (never)
                    )
                    (canon %init_peer_id% $first_hop_res_test-0  #first_hop_res_result_canon-0)
                   )
                   (ap #first_hop_res_result_canon-0 first_hop_res_gate-0)
                  )
                 )
                 (new $-ephemeral-stream-
                  (new #-ephemeral-canon-
                   (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                  )
                 )
                )
               )
               (xor
                (seq
                 (seq
                  (new $-ephemeral-stream-
                   (new #-ephemeral-canon-
                    (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                   )
                  )
                  (call first_hop_res_gate.$.[0].next_peers.[0] ("auraService" "retrieveShare") [-username-arg- first_hop_res_gate-0.$.[0]] ret-3)
                 )
                 (new $-ephemeral-stream-
                  (new #-ephemeral-canon-
                   (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                  )
                 )
                )
                (seq
                 (seq
                  (new $-ephemeral-stream-
                   (new #-ephemeral-canon-
                    (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                   )
                  )
                  (new $-ephemeral-stream-
                   (new #-ephemeral-canon-
                    (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
                   )
                  )
                 )
                 (fail :error:)
                )
               )
              )
              (ap ret-3 $middle_hop)
             )
             (seq
              (seq
               (par
                (seq
                 (new $first_hop_res_test-1
                  (seq
                   (seq
                    (fold $first_hop_res first_hop_res_fold_var-1
                     (seq
                      (seq
                       (ap first_hop_res_fold_var-1 $first_hop_res_test-1)
                       (canon %init_peer_id% $first_hop_res_test-1  #first_hop_res_iter_canon-1)
                      )
                      (xor
                       (match #first_hop_res_iter_canon-1.length 1
                        (null)
                       )
                       (next first_hop_res_fold_var-1)
                      )
                     )
                     (never)
                    )
                    (canon %init_peer_id% $first_hop_res_test-1  #first_hop_res_result_canon-1)
                   )
                   (ap #first_hop_res_result_canon-1 first_hop_res_gate-1)
                  )
                 )
                 (new $-ephemeral-stream-
                  (new #-ephemeral-canon-
                   (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                  )
                 )
                )
                (seq
                 (new $first_hop_res_test-2
                  (seq
                   (seq
                    (fold $first_hop_res first_hop_res_fold_var-2
                     (seq
                      (seq
                       (ap first_hop_res_fold_var-2 $first_hop_res_test-2)
                       (canon %init_peer_id% $first_hop_res_test-2  #first_hop_res_iter_canon-2)
                      )
                      (xor
                       (match #first_hop_res_iter_canon-2.length 1
                        (null)
                       )
                       (next first_hop_res_fold_var-2)
                      )
                     )
                     (never)
                    )
                    (canon %init_peer_id% $first_hop_res_test-2  #first_hop_res_result_canon-2)
                   )
                   (ap #first_hop_res_result_canon-2 first_hop_res_gate-2)
                  )
                 )
                 (new $-ephemeral-stream-
                  (new #-ephemeral-canon-
                   (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                  )
                 )
                )
               )
               (xor
                (seq
                 (seq
                  (new $-ephemeral-stream-
                   (new #-ephemeral-canon-
                    (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                   )
                  )
                  (call first_hop_res_gate-1.$.[0].next_peers.[1] ("auraService" "retrieveShare") [-username-arg- first_hop_res_gate-2.$.[0]] ret-4)
                 )
                 (new $-ephemeral-stream-
                  (new #-ephemeral-canon-
                   (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                  )
                 )
                )
                (seq
                 (seq
                  (new $-ephemeral-stream-
                   (new #-ephemeral-canon-
                    (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                   )
                  )
                  (new $-ephemeral-stream-
                   (new #-ephemeral-canon-
                    (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
                   )
                  )
                 )
                 (fail :error:)
                )
               )
              )
              (ap ret-4 $middle_hop)
             )
            )
           )
           (xor
            (seq
             (seq
              (par
               (seq
                (new $middle_hop_test
                 (seq
                  (seq
                   (fold $middle_hop middle_hop_fold_var
                    (seq
                     (seq
                      (ap middle_hop_fold_var $middle_hop_test)
                      (canon %init_peer_id% $middle_hop_test  #middle_hop_iter_canon)
                     )
                     (xor
                      (match #middle_hop_iter_canon.length 1
                       (null)
                      )
                      (next middle_hop_fold_var)
                     )
                    )
                    (never)
                   )
                   (canon %init_peer_id% $middle_hop_test  #middle_hop_result_canon)
                  )
                  (ap #middle_hop_result_canon middle_hop_gate)
                 )
                )
                (new $-ephemeral-stream-
                 (new #-ephemeral-canon-
                  (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                 )
                )
               )
               (seq
                (new $middle_hop_test-0
                 (seq
                  (seq
                   (fold $middle_hop middle_hop_fold_var-0
                    (seq
                     (seq
                      (ap middle_hop_fold_var-0 $middle_hop_test-0)
                      (canon %init_peer_id% $middle_hop_test-0  #middle_hop_iter_canon-0)
                     )
                     (xor
                      (match #middle_hop_iter_canon-0.length 1
                       (null)
                      )
                      (next middle_hop_fold_var-0)
                     )
                    )
                    (never)
                   )
                   (canon %init_peer_id% $middle_hop_test-0  #middle_hop_result_canon-0)
                  )
                  (ap #middle_hop_result_canon-0 middle_hop_gate-0)
                 )
                )
                (new $-ephemeral-stream-
                 (new #-ephemeral-canon-
                  (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                 )
                )
               )
              )
              (xor
               (seq
                (seq
                 (new $-ephemeral-stream-
                  (new #-ephemeral-canon-
                   (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                  )
                 )
                 (call middle_hop_gate.$.[0].next_peers.[0] ("auraService" "retrieveShare") [-username-arg- middle_hop_gate-0.$.[0]] ret-5)
                )
                (new $-ephemeral-stream-
                 (new #-ephemeral-canon-
                  (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                 )
                )
               )
               (seq
                (seq
                 (new $-ephemeral-stream-
                  (new #-ephemeral-canon-
                   (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                  )
                 )
                 (new $-ephemeral-stream-
                  (new #-ephemeral-canon-
                   (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
                  )
                 )
                )
                (fail :error:)
               )
              )
             )
             (ap ret-5 $terminal_hop_res)
            )
            (seq
             (seq
              (par
               (seq
                (new $middle_hop_test-1
                 (seq
                  (seq
                   (fold $middle_hop middle_hop_fold_var-1
                    (seq
                     (seq
                      (ap middle_hop_fold_var-1 $middle_hop_test-1)
                      (canon %init_peer_id% $middle_hop_test-1  #middle_hop_iter_canon-1)
                     )
                     (xor
                      (match #middle_hop_iter_canon-1.length 1
                       (null)
                      )
                      (next middle_hop_fold_var-1)
                     )
                    )
                    (never)
                   )
                   (canon %init_peer_id% $middle_hop_test-1  #middle_hop_result_canon-1)
                  )
                  (ap #middle_hop_result_canon-1 middle_hop_gate-1)
                 )
                )
                (new $-ephemeral-stream-
                 (new #-ephemeral-canon-
                  (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                 )
                )
               )
               (seq
                (new $middle_hop_test-2
                 (seq
                  (seq
                   (fold $middle_hop middle_hop_fold_var-2
                    (seq
                     (seq
                      (ap middle_hop_fold_var-2 $middle_hop_test-2)
                      (canon %init_peer_id% $middle_hop_test-2  #middle_hop_iter_canon-2)
                     )
                     (xor
                      (match #middle_hop_iter_canon-2.length 1
                       (null)
                      )
                      (next middle_hop_fold_var-2)
                     )
                    )
                    (never)
                   )
                   (canon %init_peer_id% $middle_hop_test-2  #middle_hop_result_canon-2)
                  )
                  (ap #middle_hop_result_canon-2 middle_hop_gate-2)
                 )
                )
                (new $-ephemeral-stream-
                 (new #-ephemeral-canon-
                  (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                 )
                )
               )
              )
              (xor
               (seq
                (seq
                 (new $-ephemeral-stream-
                  (new #-ephemeral-canon-
                   (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                  )
                 )
                 (call middle_hop_gate-1.$.[0].next_peers.[1] ("auraService" "retrieveShare") [-username-arg- middle_hop_gate-2.$.[0]] ret-6)
                )
                (new $-ephemeral-stream-
                 (new #-ephemeral-canon-
                  (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                 )
                )
               )
               (seq
                (seq
                 (new $-ephemeral-stream-
                  (new #-ephemeral-canon-
                   (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                  )
                 )
                 (new $-ephemeral-stream-
                  (new #-ephemeral-canon-
                   (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
                  )
                 )
                )
                (fail :error:)
               )
              )
             )
             (ap ret-6 $terminal_hop_res)
            )
           )
          )
          (canon %init_peer_id% $terminal_hop_res  #-terminal_hop_res-fix-0)
         )
         (ap #-terminal_hop_res-fix-0 -terminal_hop_res-flat-0)
        )
       )
      )
     )
    )
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [-terminal_hop_res-flat-0])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type SignInParams = [hub_peer_id: string, username: string, password: string, config?: {ttl?: number}] | [peer: IFluenceClient$$, hub_peer_id: string, username: string, password: string, config?: {ttl?: number}];

export type SignInResult = Promise<{ next_peers: string[]; shares: string[]; username: string; }[]>;

export function signIn(...args: any): any {
    return callFunction$$(
        args,
        {
    "functionName": "signIn",
    "arrow": {
        "domain": {
            "fields": {
                "hub_peer_id": {
                    "name": "string",
                    "tag": "scalar"
                },
                "username": {
                    "name": "string",
                    "tag": "scalar"
                },
                "password": {
                    "name": "string",
                    "tag": "scalar"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "type": {
                        "name": "HopPacket",
                        "fields": {
                            "next_peers": {
                                "type": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "tag": "array"
                            },
                            "shares": {
                                "type": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "tag": "array"
                            },
                            "username": {
                                "name": "string",
                                "tag": "scalar"
                            }
                        },
                        "tag": "struct"
                    },
                    "tag": "array"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        signIn_script
    );
}

export const writeAuraShare_script = `
(xor
 (seq
  (seq
   (seq
    (seq
     (seq
      (seq
       (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
       (call %init_peer_id% ("getDataSrv" "peer_id") [] -peer_id-arg-)
      )
      (call %init_peer_id% ("getDataSrv" "username") [] -username-arg-)
     )
     (call %init_peer_id% ("getDataSrv" "share") [] -share-arg-)
    )
    (call %init_peer_id% ("getDataSrv" "holding_peers") [] -holding_peers-arg-)
   )
   (xor
    (seq
     (seq
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
      (call -peer_id-arg- ("auraService" "writeAuraShare") [%init_peer_id% -username-arg- -share-arg- -holding_peers-arg-] ret)
     )
     (new $-ephemeral-stream-
      (new #-ephemeral-canon-
       (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
      )
     )
    )
    (seq
     (seq
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
     )
     (fail :error:)
    )
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [ret])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type WriteAuraShareParams = [peer_id: string, username: string, share: string, holding_peers: string[], config?: {ttl?: number}] | [peer: IFluenceClient$$, peer_id: string, username: string, share: string, holding_peers: string[], config?: {ttl?: number}];

export type WriteAuraShareResult = Promise<boolean>;

export function writeAuraShare(...args: any): any {
    return callFunction$$(
        args,
        {
    "functionName": "writeAuraShare",
    "arrow": {
        "domain": {
            "fields": {
                "peer_id": {
                    "name": "string",
                    "tag": "scalar"
                },
                "username": {
                    "name": "string",
                    "tag": "scalar"
                },
                "share": {
                    "name": "string",
                    "tag": "scalar"
                },
                "holding_peers": {
                    "type": {
                        "name": "string",
                        "tag": "scalar"
                    },
                    "tag": "array"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "bool",
                    "tag": "scalar"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        writeAuraShare_script
    );
}

import ENV from './env.js'

//@ts-ignore
import sss from 'shamirs-secret-sharing'

(async () => {

    await Fluence.connect(kras[ENV]);

    console.log(await Fluence.getClient().getPeerId())

    try{
        const utf8Decoder = new TextDecoder();
        const res1 = await signIn('12D3KooWQ7P4MB1MStsUDBFn6XNv8SpteBC4V5YvW1qYr4PJ1ryw', 'morgan', 'wonder', {ttl: 20000})
        console.log(res1)
        var u8arr1 = Uint8Array.from(res1[0].shares[0].split(',').map((x:any)=>parseInt(x,10)));
        var u8arr2 = Uint8Array.from(res1[0].shares[1].split(',').map((x:any)=>parseInt(x,10)));
        var u8arr3 = Uint8Array.from(res1[0].shares[2].split(',').map((x:any)=>parseInt(x,10)));
        console.log(u8arr1)
        console.log(u8arr2)
        console.log(u8arr3)
        const recovered = sss.combine([u8arr1,u8arr2,u8arr3])
        console.log(recovered.toString())
    }catch(err){
        console.log(err)
    }
})()