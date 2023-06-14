import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaRegBookmark, FaRegEye, FaRegStar, FaShareAlt } from 'react-icons/fa';


const NewsSummaryCard = ({news}) => {
    // console.log(news);
    const {author, _id, details, image_url, published_date, rating, title, total_view, } = news;
  return (
    <Card className='mb-3'>
    <Card.Header className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
            <div>
            <Image style={{height:'60px'}} className='me-2' src={author.img} roundedCircle />
            </div>
            <div>
                <h5 className='mb-0'>{author.name}</h5>
                <p>{author.published_date}</p>
            </div>
        </div>

        <div>
            <FaRegBookmark className='me-2'/>
            <FaShareAlt/>
        </div>

    </Card.Header>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Img variant="top" src={image_url} />
      <Card.Text>
        {
            details.length > 250 
            ?
            <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></p>
            :
            <p>{details}</p>
        }
      </Card.Text>
    </Card.Body>
    <Card.Footer className='d-flex justify-content-between'>
        <div className='d-flex align-items-center'>
            <FaRegStar className='me-2 text-warning'/>
            <span>{rating.number}</span>
        </div>
        <div className='d-flex align-items-center'>
            <FaRegEye className='me-2'/>
            <span>{total_view}</span>
        </div>
    </Card.Footer>
  </Card>
  )
}

export default NewsSummaryCard