import React from "react";
import "./todocard.css";
import Avatar from "../../Shared/Avatar/Avatar";
import LoadMoreIcon from "../../Shared/Icon/LoadMoreIcon";
import DotIcon from "../../Shared/Icon/DotIcon";

const TodoCard = ({ticket={},displayOption=''}) => {
  console.log(ticket)
  return (
    <div
      style={{
        background: "#fff",
        padding: "1rem",
        borderRadius: "6px",
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
        marginBottom:'1rem'
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h4 className="text-gray">{ticket?.id}</h4>
        {displayOption!=='user' && <Avatar name={ticket?.user?.name} imageUrl={ticket?.user?.imageUrl}/>}
      </div>
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
        }}
      >
        <div>
          <input type="checkbox" style={{marginTop:'6px',border: '1px solid rgb(111, 111, 111)', borderRadius:'50%',outline:'none',height:'14px',width:'14px'}}/>
        </div>
        <h4 className='text-primary' style={{marginLeft:'6px'}}>{ticket?.title}</h4>
      </div>
      <div></div>
      <div style={{ display: "flex" }}>
        <div className="outline-button">
          <LoadMoreIcon />
        </div>
        <div className="outline-button" style={{marginLeft:'6px'}}>
          <DotIcon />
          <h4 className="text-gray">{ticket?.tag[0]}</h4>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
