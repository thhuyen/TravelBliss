import { useReactiveVar, makeVar, ReactiveVar } from "@apollo/client";

const departure = makeVar<string>('');
export const useDeparture = (): [string, ReactiveVar<string>] => [useReactiveVar(departure), departure]

