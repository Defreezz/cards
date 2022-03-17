import {AppStoreType} from "../store";
import {PackType} from "../../main/api/types";

export const selectPacks = (state:AppStoreType):PackType[] => state.packs.cardPacks