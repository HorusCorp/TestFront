import React, { useEffect } from 'react'
import { useState } from 'react'
import {useSelector} from 'react-redux'
// import { decrement } from '../redux/CounterRedux/counterAction';
import { useDispatch } from 'react-redux';
// import {BUY_KEY} from '../redux/BuyRedux/buy.reducer'



function ColumnTwo() {

    const dispatch = useDispatch()
    //   recupération de ma database dans le store redux  
    // let viewBuy = useSelector((state)=>{
    //     return state[BUY_KEY]
    //     })
    
    const viewBuy = useSelector(state => state.items)
    const [itemDisplay, setItemDisplay] = useState(0);
    const [dataArray,setDataArray] = useState([])
    
    
    let itemsData = viewBuy

    function handlechange(){
        console.log(viewBuy)
        let itemsData = viewBuy
        console.log(itemsData) 
    }

    useEffect(()=>{
        handlechange()
    },[])
    useEffect(()=>{
        
    },[itemDisplay])
    


    // fonction avancer dans la liste des objets à défiler
    function advanceInList(e) {
        if(itemDisplay === 0){
            setItemDisplay(itemDisplay + 1)
            console.log('advance itemDisplay:'+itemDisplay)
        }else if(itemDisplay < dataArray.length||19){
            setItemDisplay(itemDisplay + 1)
            console.log('advance itemDisplay:'+itemDisplay) 
        }else if(itemDisplay===18){
            setItemDisplay(dataArray.length)
        }else{

        }

  }
  // fonction reculer dans la liste des objets à défiler
    function goBackInList(e) {
        if(itemDisplay>0){
            setItemDisplay(itemDisplay - 1)
            console.log(itemDisplay)
        }else if(itemDisplay === 0){
            setItemDisplay(dataArray.length)
            console.log(itemDisplay)
        }else{

        }
    
  }

// fonction pour acheter un objet du shop et le supprimer de la liste, ainsi qu enlever son prix de mon porte money
  function remooveFromBuyList(){
    if(dataArray.length >= 0){
        var itemList = itemsData
        dispatch({type:"DECREMENT", payload: itemList[0].cost})
        itemList.splice(dataArray[0], 1)
        // console.log('itemListAfterSlice :' + (JSON.stringify(itemList)))
        setDataArray(dataArray => [...dataArray, itemList])
        
    }
  }

  
 



  return (
    
    <div className='centerZone__container'>
    
{/* Ici le Slider d'item */}
        <div className='itemSlider__container'>
            <div className='itemSlider__container_prev__btn' onClick={(e)=> goBackInList(e)}>prev</div>
            <div className='itemSlider__container_slider__bg'>
                
                <div className='itemSlider__container_sliderItemsList'>
                    
                    {
                    itemsData.map((item) =><div key={item.key}  className={Number(item.id)===itemDisplay?"active itemSlider__container_sliderItemsList_itemDisplayedPics"+item.id:"hidden itemSlider__container_sliderItemsList_itemDisplayedPics"+item.id}></div>
                    )
                    }
                </div>
                
            </div>
            <div className='itemSlider__container_next__btn' onClick={(e)=> advanceInList(e)}>next</div>

        </div>

{/* Ici la boites avec les stats des item*/}
        <div className='itemDetailBox__container'>
   
            <div className='itemDetailBox__container_itemName'>{itemsData[itemDisplay].name}</div>

                <div className='itemDetailBox__container_itemProperty'>
                    {/* <div className='itemDetailBox__container_itemPicture'></div> */}
                    {
                    itemsData.map((item) =><div key={item.key}  className={Number(item.id)===itemDisplay?"active itemDetailBox__container_itemPicture"+item.id:"hidden itemDetailBox__container_itemPicture"+item.id}></div>
                    )
                    }
                        <div className='itemDetailBox__container_itemStats'>
                            <div className='itemDetailBox__container_itemStats_integrity'>
                                <p>INTEGRITY</p>
                                <span>{itemsData[itemDisplay].integrity}</span>
                            </div>
                            <div className='itemDetailBox__container_itemStats_damage'>
                                <p>DAMAGE</p>
                                <span>+{itemsData[itemDisplay].damage}</span>
                            </div>
                            <div className='itemDetailBox__container_itemStats_cost'>
                                <p>COST</p>
                                <span>{itemsData[itemDisplay].cost}</span>
                            </div>
                        </div>
                </div>
        </div>

{/* Ici le boutton d'achat */}
        <div className='buyBtn__Container' onClick={(e)=>remooveFromBuyList(e)}>Buy</div>
    </div>
  )
}

export default ColumnTwo