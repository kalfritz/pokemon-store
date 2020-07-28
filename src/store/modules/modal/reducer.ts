import produce from 'immer';

const INITIAL_STATE = {
  status: false,
  loading: false,
  store: 'eletro',
  moneyBack: 0,
};

export type Modal = {
  status: boolean;
  loading: boolean;
  store: string;
  moneyBack: number;
};

type Action = {
  type: '@modal/OPEN_MODAL' | '@modal/CLOSE_MODAL' | '@historic/ADD';
  payload: {
    store?: string;
    purchaseTotalPrice?: number;
    moneyBack?: number;
  };
};

export default function modal(state: Modal = INITIAL_STATE, action: Action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@historic/ADD': {
        const { store, purchaseTotalPrice } = action.payload;
        draft.loading = true;
        draft.status = true;
        draft.store = store!;
        draft.moneyBack = purchaseTotalPrice! / 10!;
        break;
      }
      case '@modal/CLOSE_MODAL': {
        draft.status = false;
        draft.loading = false;
        draft.moneyBack = 0;
        break;
      }
      default:
    }
  });
}
