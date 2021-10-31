import React, { ChangeEventHandler } from 'react'
interface SearchInputInterface {
    onChange: ChangeEventHandler<HTMLInputElement>
    value: string;
}
export const SearchInput = ({ value, onChange }: SearchInputInterface): JSX.Element => {
    return <input className="searchInput" placeholder="Search by name, symbol, address" {...{ value, onChange }} type="text" />
}