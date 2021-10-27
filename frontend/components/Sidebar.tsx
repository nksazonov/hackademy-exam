import { useContext } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import AddList from "./AddList";
import SidebarBottom from "./SidebarBottom";
import { ListHeadsContext } from "../context/listHeadsContext";
import ListHead from "./ListHead";

const Sidebar = () => {
  const { state } = useContext(ListHeadsContext);

  return (
    <div className="w-2/12 h-screen p-4 bg-yellow-350 flex flex-col items-start relative gap-y-3">
      <Image
        src="/img/logo-white.png"
        alt="openware logo"
        width={40}
        height={28}
      />
      <div className="py-1">
        <FontAwesomeIcon
          icon={faChevronLeft}
          size="lg"
          className="mt-8 ml-2"
        />
      </div>

      {
        state.listHeads.map(listHead => <ListHead
          listName={listHead.name}
          listId={listHead.id}
          key={listHead.id}
        />)
      }

      <AddList />

      <SidebarBottom className="px-12 text-xl mt-auto" />
    </div>
  )
}

export default Sidebar;
