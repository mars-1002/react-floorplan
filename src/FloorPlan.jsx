//imported components
import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'
import Bedroom from './Bedroom'
import Bath from './Bath'

const FloorPlan = () => {

  return ( 
    <>
      <Bedroom bedNum='1' />
      <Kitchen />
      <Bath size='Full' />
      <Bedroom bedNum='2' />
      <LivingRoom />
      <Bath size='Half'/>
      <Bedroom bedNum='3' />
    </>
  );
}

export default FloorPlan;