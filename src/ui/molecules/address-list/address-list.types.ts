type AddressListItems = {
  address: string;
  id: number;
  description?: string;
}

export type AddressListProps = {
  dir?: 'column' | 'row';
  itemIsClearable?: boolean;
  listItems: AddressListItems[];
}

export type AddressListWrapperProps = {
  dir?: 'column' | 'row';
}
