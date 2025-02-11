import { Box, Flex, Avatar, Text, Heading, Badge, DataList, AspectRatio, Container } from "@radix-ui/themes";

const HomePage = () => {
  return (
    <Container size="4" py="4">
      <Flex 
        direction={{ initial: 'column', sm: 'row' }} 
        gap="6"
      >
        {/* 左側個人介紹卡片 */}
        <Box 
          width={{ initial: '100%', sm: '30%' }}
          p="4"
          style={{ 
            backgroundColor: 'var(--gray-a2)',
            borderRadius: 'var(--radius-3)',
            flexShrink: 0
          }}
        >
          <Flex direction="column" gap="4" align="center">
            <Avatar
              size="8"
              variant="solid"
              src="./Avator.png"
              fallback="A"
              style={{ marginTop: '1rem' }}
            />
            
            <Flex direction="column" gap="3" align="center">
              <Heading size="6">你好！這裡是hsu_K</Heading>
              <Flex gap="2" wrap="wrap" justify="center">
                <Badge color="orange" size="2">CTF菜雞</Badge>
                <Badge color="gold" size="2" variant="solid">魔物"獵"人</Badge>
              </Flex>

              <DataList.Root size="2">
                <DataList.Item align="center">
                  <DataList.Label minWidth="70px">目前狀態：</DataList.Label>
                  <DataList.Value>
                    <Badge color="red" variant="soft" size="2">
                      專題想不到題目中
                    </Badge>
                  </DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label minWidth="70px">Email：</DataList.Label>
                  <DataList.Value>
                    <Text size="2">t0937993806@gmail.com</Text>
                  </DataList.Value>
                </DataList.Item>
              </DataList.Root>

              <Flex gap="4" align="center" mt="2">
                <a href="https://github.com/hsu-K" target="_blank" rel="noopener noreferrer">
                  <img src="./github.svg" alt="GitHub" width="24" height="24" />
                </a>
                <a href="https://discordapp.com/users/612578388179157002" target="_blank" rel="noopener noreferrer">
                  <img src="./discord.svg" alt="Discord" width="22" height="22" />
                </a>
                <a href="https://x.com/697Inventor" target="_blank" rel="noopener noreferrer">
                  <img src="./twitter.svg" alt="Twitter" width="22" height="22" />
                </a>
              </Flex>
            </Flex>
          </Flex>
        </Box>

        {/* 右側內容區域 */}
        <Box style={{ flex: "1" }}>
          <AspectRatio ratio={16 / 9}>
            <img
              src="./logbg.jpg"
              alt="Background"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "var(--radius-3)",
              }}
            />
          </AspectRatio>
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;