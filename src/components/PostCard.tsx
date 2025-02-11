import { Card, Box, Heading, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";

interface PostCardProps {
  title: string;
  path: string;
  date: string;
  description?: string;
}

const PostCard = ({ title, path, date, description }: PostCardProps) => {
  return (
    <Link 
      to={`/post/${path}`} 
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <Card 
        style={{ 
          cursor: 'pointer',
          height: '100%',
          transition: 'transform 0.2s ease-in-out'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <Box p="4">
          <Heading size="4" mb="2">{title}</Heading>
          <Text size="2" color="gray" mb="3">
            {date}
          </Text>
          {description && (
            <Text size="2" style={{ 
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}>
              {description}
            </Text>
          )}
        </Box>
      </Card>
    </Link>
  );
};

export default PostCard; 