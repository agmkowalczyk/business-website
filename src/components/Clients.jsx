import { clients } from '../constants'

const Clients = () => (
  <section className='flexCenter} my-4'>
    <div className='flexCenter flex-wrap w-full'>
      {clients.map((client) => (
        <div
          key={client.id}
          className='flex-1 flexCenter sm:min-w-[192px] min-w-[120px] m-5'
        >
          <img
            src={client.logo}
            alt='client_logo'
            className='sm:w-[192px] w-[100px] object-contain hover:contrast-50'
          />
        </div>
      ))}
    </div>
  </section>
)

export default Clients
