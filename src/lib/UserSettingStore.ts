import {
  UserSettingsActionTypes,
  UserSettingsProtoStore,
  UserSettingsProtoUtils,
} from "./requiredModules";
import Types from "../types";
export const getSetting = (category: string, key: string): boolean => {
  if (!category || !key) return;
  return Boolean(UserSettingsProtoStore?.settings?.[category]?.[key]?.value);
};
export const getSettingsStore = (): {
  updateAsync: (
    category: string,
    setter: Types.DefaultTypes.AnyFunction,
    type: string | number,
  ) => void;
} => {
  return Object.values(UserSettingsProtoUtils)?.find?.(
    (n) => n?.updateAsync && n?.ProtoClass?.typeName?.endsWith(".PreloadedUserSettings"),
  );
};
export const setSetting = (category: string, key: string, value: boolean): boolean => {
  if (!category || !key) return;
  let store = getSettingsStore();
  if (store)
    store.updateAsync(
      category,
      (settings) => {
        if (!settings) return;
        settings[key].value = value;
      },
      UserSettingsActionTypes.INFREQUENT_USER_ACTION,
    );
};

export default { getSetting, getSettingsStore, setSetting };
