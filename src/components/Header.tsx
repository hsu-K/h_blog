import { Box, Tabs, Button, DropdownMenu } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { Flex, Text, Container } from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const Header = () => {
  // 追蹤視窗寬度
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 桌面版導航
  const DesktopNav = () => (
    <Tabs.Root defaultValue="home">
      <Tabs.List color="cyan">
        <Box minWidth="70%" ml="7">
          <Flex align="center" gap="2">
            <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571ZM3.85355 5.14646C4.04882 5.34172 4.04882 5.6583 3.85355 5.85356L2.20711 7.50001L3.85355 9.14646C4.04882 9.34172 4.04882 9.6583 3.85355 9.85356C3.65829 10.0488 3.34171 10.0488 3.14645 9.85356L1.14645 7.85356C0.951184 7.6583 0.951184 7.34172 1.14645 7.14646L3.14645 5.14646C3.34171 4.9512 3.65829 4.9512 3.85355 5.14646ZM11.1464 5.14646C11.3417 4.9512 11.6583 4.9512 11.8536 5.14646L13.8536 7.14646C14.0488 7.34172 14.0488 7.6583 13.8536 7.85356L11.8536 9.85356C11.6583 10.0488 11.3417 10.0488 11.1464 9.85356C10.9512 9.6583 10.9512 9.34172 11.1464 9.14646L12.7929 7.50001L11.1464 5.85356C10.9512 5.6583 10.9512 5.34172 11.1464 5.14646Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
            </svg>
            <Text size={{initial: "5", sm: "7"}} weight="bold" as="p">hus_K Blog (施工中)</Text>
          </Flex>
        </Box>
        <Link to={"/"}>
          <Tabs.Trigger value="home">Home</Tabs.Trigger>
        </Link>
        <Link to={"/Documents"}>
          <Tabs.Trigger value="documents">文章列表</Tabs.Trigger>
        </Link>
      </Tabs.List>
    </Tabs.Root>
  );

  // 手機版導航
  const MobileNav = () => (
    <Flex justify="between" align="center" px="4" py="2">
      <Flex align="center" gap="2">
        <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571ZM3.85355 5.14646C4.04882 5.34172 4.04882 5.6583 3.85355 5.85356L2.20711 7.50001L3.85355 9.14646C4.04882 9.34172 4.04882 9.6583 3.85355 9.85356C3.65829 10.0488 3.34171 10.0488 3.14645 9.85356L1.14645 7.85356C0.951184 7.6583 0.951184 7.34172 1.14645 7.14646L3.14645 5.14646C3.34171 4.9512 3.65829 4.9512 3.85355 5.14646ZM11.1464 5.14646C11.3417 4.9512 11.6583 4.9512 11.8536 5.14646L13.8536 7.14646C14.0488 7.34172 14.0488 7.6583 13.8536 7.85356L11.8536 9.85356C11.6583 10.0488 11.3417 10.0488 11.1464 9.85356C10.9512 9.6583 10.9512 9.34172 11.1464 9.14646L12.7929 7.50001L11.1464 5.85356C10.9512 5.6583 10.9512 5.34172 11.1464 5.14646Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
        </svg>
        <Text size="5" weight="bold">hus_K Blog (施工中)</Text>
      </Flex>
      
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button variant="soft" size="2">
            <HamburgerMenuIcon width="16" height="16" />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content style={{ minWidth: '200px' }}>
          <DropdownMenu.Item style={{ padding: '12px 16px' }}>
            <Link 
              to="/" 
              style={{ 
                textDecoration: 'none', 
                color: 'inherit',
                fontSize: 'var(--font-size-2)',
                width: '100%',
                display: 'block'
              }}
            >
              Home
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item style={{ padding: '12px 16px' }}>
            <Link 
              to="/Documents" 
              style={{ 
                textDecoration: 'none', 
                color: 'inherit',
                fontSize: 'var(--font-size-2)',
                width: '100%',
                display: 'block'
              }}
            >
              文章列表
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Flex>
  );

  return (
    <Container style={{borderBottom: '1px solid var(--gray-a5)'}} maxWidth="100%">
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </Container>
  );
}

export default Header;