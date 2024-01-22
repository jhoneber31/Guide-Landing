import './index.scss'
import icon_1 from 'assets/icons/seccion_afiliate_icon_01_web.svg'
import icon_2 from 'assets/icons/seccion_afiliate_icon_02_web.svg'
import icon_3 from 'assets/icons/seccion_afiliate_icon_03_web.svg'
import visa from 'assets/icons/visa.jpg'

export default function PaymentSection() {
  const joins = [
    {
      title: 'TIEMPO',
      image: icon_1,
      description: 'Olvídate de los pagos mensuales'
    },
    {
      title: 'ACCESIBILIDAD',
      image: icon_2,
      description: 'Acceso ilimitado durante tu preparación'
    },
    {
      title: 'SEGURIDAD',
      image: icon_3,
      description: 'Transacciones seguras con débito automático'
    },
  ]

  return (
    <section className="home-7">
      <div className="container">
        <div className="home-7-title">
          <h2>
            Afíliate al
            <br></br>
            <span>
              Débito Automático
            </span>
          </h2>
          
          <div className="home-7-payment-2">
            <img src= { visa } alt=""/>
            <a className="btn-afiliate" href="https://www.mercadopago.com.pe/subscriptions/checkout?preapproval_plan_id=2c9380848bbab262018bc98a9a5109a8" target="_blank">Afíliate aquí</a>
          </div>
        </div>
        <div className="home-7-items">
          {
            joins.map((item, index) =>(
              <div className= "item" key={`${index}-${item.title}`}>
                <h3> {item.title} </h3>
                <img  src={item.image} alt=""/>
                <p>{item.description} </p>
              </div>

            ))
          }
          
        </div>
      </div>
    </section>
  )
}
