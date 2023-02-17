import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function BrandStory() {
  return (
      <Container maxWidth="lg">
          <Box className='brandStory-style'>
             <Box className='brandStory-left'>
              
              </Box>
              <Box className='brandStory-right'>
              <Typography variant="h2" gutterBottom className='brandStory-title'>
                     Story about Our Brand
                  </Typography>
                  <Typography variant="body1" gutterBottom className='brandStory-pargraph'>
                      Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company
                  </Typography>
                  <Link href="#" className='brandStory-link'>Read full story</Link>

              </Box>    
          </Box>
    </Container>
  )
}
