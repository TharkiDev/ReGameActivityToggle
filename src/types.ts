import { types } from "replugged";
import type { Store } from "replugged/dist/renderer/modules/common/flux";
import { ContextMenuProps } from "replugged/dist/renderer/modules/components/ContextMenu";
import type util from "replugged/util";

export namespace Types {
  export import DefaultTypes = types;
  export type MenuProps = ContextMenuProps["ContextMenu"] & { children: React.ReactElement[] };
  export type UtilTree = util.Tree;
  export type ReactTree = util.Tree & React.ReactElement;
  export type GenericModule = Record<string, DefaultTypes.AnyFunction>;

  export interface UserSettingsActionTypes {
    AUTOMATED: number;
    DAILY: number;
    FREQUENT_USER_ACTION: number;
    INFREQUENT_USER_ACTION: number;
    SLOW_USER_ACTION: number;
  }
  export interface WindowStore extends Store {
    isFocused: () => boolean;
    addChangeListener: (callback: DefaultTypes.AnyFunction) => void;
    removeChangeListener: (callback: DefaultTypes.AnyFunction) => void;
    isElementFullScreen: () => boolean;
  }
  export type PanelButton = React.ComponentClass<{
    onContextMenu?: (event: React.MouseEvent) => void;
    icon?: () => React.ReactNode;
    tooltipText?: string;
    onClick?: () => void;
  }>;
  export interface UserSettingsProtoStore extends Store {
    getDismissedGuildContent: DefaultTypes.AnyFunction;
    getFullState: DefaultTypes.AnyFunction;
    getGuildFolders: DefaultTypes.AnyFunction;
    getGuildRecentsDismissedAt: DefaultTypes.AnyFunction;
    getState: DefaultTypes.AnyFunction;
    hasLoaded: DefaultTypes.AnyFunction;
    initialize: DefaultTypes.AnyFunction;
    constructor: DefaultTypes.AnyFunction;
    frecencyWithoutFetchingLatest: object;
    settings: object;
    wasMostRecentUpdateFromServer: boolean;
  }
  export interface ConnectedAccountsStore extends Store {
    getAccount: DefaultTypes.AnyFunction;
    getAccounts: DefaultTypes.AnyFunction;
    getLocalAccount: DefaultTypes.AnyFunction;
    getLocalAccounts: DefaultTypes.AnyFunction;
    isFetching: DefaultTypes.AnyFunction;
    isJoining: DefaultTypes.AnyFunction;
    isSuggestedAccountType: DefaultTypes.AnyFunction;
  }
  export interface ConnectedAccountsUtils {
    authorize: DefaultTypes.AnyFunction;
    callback: DefaultTypes.AnyFunction;
    completeTwoWayLink: DefaultTypes.AnyFunction;
    connect: DefaultTypes.AnyFunction;
    disconnect: DefaultTypes.AnyFunction;
    fetch: DefaultTypes.AnyFunction;
    joinServer: DefaultTypes.AnyFunction;
    linkDispatchAuthCallback: DefaultTypes.AnyFunction;
    refresh: DefaultTypes.AnyFunction;
    refreshAccessToken: DefaultTypes.AnyFunction;
    setFriendSync: DefaultTypes.AnyFunction;
    setMetadataVisibility: DefaultTypes.AnyFunction;
    setShowActivity: DefaultTypes.AnyFunction;
    setVisibility: DefaultTypes.AnyFunction;
    submitPinCode: DefaultTypes.AnyFunction;
    update: DefaultTypes.AnyFunction;
  }
  export type MenuArgs = Array<{
    navId: string;
    children: [React.ReactElement];
  }>;
  export interface KeybindEvent {
    type: string;
    altKey: boolean;
    ctrlKey: boolean;
    keyCode: number;
    metaKey: boolean;
    shiftKey: boolean;
  }
  export type CurrentlyPressed = Record<number, KeybindEvent>;

  export type KeybindEvents = KeybindEvent[];

  export interface AccountDetailsClasses {
    accountProfilePopoutWrapper: string;
    avatar: string;
    avatarWrapper: string;
    buildOverrideButton: string;
    canCopy: string;
    container: string;
    copySuccess: string;
    customStatus: string;
    emoji: string;
    godlike: string;
    hasBuildOverride: string;
    nameTag: string;
    panelSubtextContainer: string;
    panelTitleContainer: string;
    redIcon: string;
    statusTooltip: string;
    strikethrough: string;
    usernameContainer: string;
    withTagAsButton: string;
    withTagless: string;
  }
  export interface KeybindUtils {
    toCombo: DefaultTypes.AnyFunction;
    toEvent: DefaultTypes.AnyFunction;
  }
  export interface SoundUtils {
    createSound: DefaultTypes.AnyFunction;
    createSoundpackSound: DefaultTypes.AnyFunction;
    playSound: DefaultTypes.AnyFunction;
  }
  export interface CloseButtonProps {
    size?: string;
    className?: string;
    onClick?: () => void;
  }
  export interface KeybindRecorderItemProps {
    title?: string;
    note?: string;
    size?: string;
    className?: string;
    value?: number[][];
    onChange?: (value: number[][]) => void;
    disabled?: boolean;
    clearable?: boolean;
  }

  export type Jsonifiable =
    | null
    | undefined
    | boolean
    | number
    | string
    | Jsonifiable[]
    | { [key: string]: Jsonifiable };
  export type ValType<T> =
    | T
    | React.ChangeEvent<HTMLInputElement>
    | (Record<string, unknown> & { value?: T; checked?: T });

  export type NestedType<T, P> = P extends `${infer Left}.${infer Right}`
    ? Left extends keyof T
      ? NestedType<T[Left], Right>
      : Left extends `${infer FieldKey}[${infer IndexKey}]`
      ? FieldKey extends keyof T
        ? NestedType<Exclude<T[FieldKey], undefined> extends infer U ? U : never, IndexKey>
        : undefined
      : undefined
    : P extends keyof T
    ? T[P]
    : P extends `${infer FieldKey}`
    ? FieldKey extends keyof T
      ? Exclude<T[FieldKey], undefined> extends infer U
        ? U
        : never
      : undefined
    : undefined;

  export interface Settings {
    spotify: boolean;
    statusPicker: boolean;
    userPanel: boolean;
    showToast: boolean;
    keybind: Array<{
      altKey: boolean;
      code: string;
      ctrlKey: boolean;
      key: string;
      keyCode: number;
      metaKey: boolean;
      shiftKey: boolean;
    }>;
    playAudio: {
      gameDisable: boolean;
      gameEnable: boolean;
      spotifyDisable: boolean;
      spotifyEnable: boolean;
      spotifyToogle: boolean;
    };
  }
}
export default Types;
