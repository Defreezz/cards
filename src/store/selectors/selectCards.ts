import {AppStoreType} from "../store";
import {CardsType} from "../../main/api/types";

export const selectCards = (state:AppStoreType):CardsType[] => state.cards.cards