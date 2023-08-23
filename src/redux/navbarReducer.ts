import { v1 } from "uuid";

export type NavbarItemType = {
  id: string
  title: string
}

export type NavbarStateType = {
  navbarList: NavbarItemType[]
}

type ActionTypes = {
  type: any
}
const initialState: NavbarStateType = {
  navbarList:  [
    {id: v1(), title: 'Profile'},
    {id: v1(), title: 'Messages'},
    {id: v1(), title: 'News'},
    {id: v1(), title: 'Music'},
    {id: v1(), title: 'Settings'},
]
}
export const navbarReducer = (state: NavbarStateType = initialState, action: ActionTypes): NavbarStateType => {
  switch (action.type) {
    default:
      return state;
  }
}