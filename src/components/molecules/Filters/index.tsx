import React from "react"
import './styled.css'
import { BsFillGrid1X2Fill, BsGrid3X3GapFill, BsSearch } from "react-icons/bs";

interface IProps {
  tags: string[],
  onClick: (value: string) => void,
  onChange: (value: string) => void,
  onClickTag: (value: string) => void,
}

const Filters: React.FC<IProps> = ({ tags, onClick, onChange, onClickTag }) => {
  return (
    <section className="content-filters">
      <div className="content-filters__display">
        <BsFillGrid1X2Fill size={22} color={'rgba(255 84 114 / 100%)'} cursor='pointer' onClick={() => onClick('grid')}/>
        <BsGrid3X3GapFill size={24} color={'rgba(255 84 114 / 100%)'} cursor='pointer' onClick={() => onClick('list')}/>
      </div>

      <div className="content-filters__search">
        <div>
          <input type="text" placeholder="Buscar..." onChange={(event) => onChange(event.target.value)}/>
          <BsSearch size={16} color={'rgba(0 0 0 / 60%)'}/>
        </div>
      </div>

      <div className="content-filters__tags">
        {
          tags?.map((tag: string, index: number) => <button key={index.toString()} onClick={() => onClickTag(tag)}>{tag}</button>)
        }
      </div>
    </section>
  )
}

export default Filters