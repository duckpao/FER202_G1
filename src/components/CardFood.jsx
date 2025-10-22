import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap';

function CardFood() {
  return (
    <Container md={3}>
      <Card>
        <div style={{ flex: '1 1 55%' }}>
          <Card.Img
            src="https://www.bing.com/images/search?view=detailV2&ccid=NRsaxboN&id=2297A213A808613BD808B149EA814CC82365D193&thid=OIP.NRsaxboNokrhEAWQXEI8cAHaHa&mediaurl=https%3a%2f%2fanchoivungtau.vn%2fwp-content%2fuploads%2f2022%2f11%2fkem_ky_tiem_kem_mua_dong_vung_tau_03.jpeg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.351b1ac5ba0da24ae11005905c423c70%3frik%3dk9FlI8hMgepJsQ%26pid%3dImgRaw%26r%3d0&exph=2048&expw=2048&q=kem&FORM=IRPRST&ck=86FFF19394275DAF514153EA8CA7DDB0&selectedIndex=7&itb=0"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

      </Card>
    </Container>
  )
}

export default CardFood