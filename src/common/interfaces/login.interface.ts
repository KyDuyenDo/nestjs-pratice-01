export interface LoginRequesrInterface {
  email: string;
  password: string;
}

export interface LoginResponseInterface {
  status: string;
  email: string;
}

export interface SignUpResponseInterface {
  status: string;
  email: string;
  username: string;
}

export interface EditDetailInterface {
  id: string;
  username: string;
}
