import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootParamList ={
    Home: undefined;
    About:{
        userId: number;
        userInfo: {
            username: string;
        }
    };
    Settings: {
        username: string;
    };
    Contact: undefined;
    Spec: undefined;
}

export type HomeDrawerParamList ={
    Contact: undefined;
    Profile: undefined;
    Messages: undefined;
}

export type HomeNavigationProp = NativeStackNavigationProp<RootParamList,"Home">;
export type AboutNavigationProp = NativeStackNavigationProp<RootParamList, "About">;
export type SettingsNavigationProp = NativeStackNavigationProp<RootParamList, "Settings">;

export function useTypedRoute<T extends keyof RootParamList>() {
  return useRoute<RouteProp<RootParamList, T>>();
}

export function useTypedNavigation<T extends keyof RootParamList>() {
  return useNavigation<NativeStackNavigationProp<RootParamList, T>>();
}