import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Box, Flex, Avatar, Text, Heading, Badge, DataList, AspectRatio, Container } from "@radix-ui/themes";
const HomePage = () => {
  return (
    <>
      <Container>
        <Flex direction={{ initial: 'column', sm: 'row' }}>
          <Box minWidth="30%" as="div" style={{ borderRight: 'solid 2px white' }}>
            <Flex direction="column" gap="4" align="center" mt="5" >
              <Avatar
                size="9"
                variant="solid"
                src="./Avator.png"
                fallback="A"
              />
              <Box>
                <Flex direction="column" gapY="4" align="center">
                  <Heading>你好！這裡是hsu_K</Heading>
                  <Flex gap="2">
                    <Badge color="orange" size="3">CTF菜雞</Badge>
                    <Badge color="gold" size="3" variant="solid">魔物"獵"人</Badge>
                  </Flex>
                  {/* <Box>
                  <Text size="5" ml="6">拖了一輩子的Blog</Text>
                </Box> */}
                  <DataList.Root size="3" mt="5">
                    <DataList.Item align="center">
                      <DataList.Label minWidth="50px" >目前狀態：</DataList.Label>
                      <DataList.Value>
                        <Badge color="red" variant="soft" size="2">
                          專題想不到題目中
                        </Badge>
                      </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                      <DataList.Label minWidth="50px">Email:</DataList.Label>
                      <DataList.Value>
                        <Text>t0937993806@gmail.com</Text>
                      </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                      <DataList.Label minWidth="50px">Email:</DataList.Label>
                      <DataList.Value>
                        <Text>t0937993806@gmail.com</Text>
                      </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                      <DataList.Label minWidth="50px">Email:</DataList.Label>
                      <DataList.Value>
                        <Text>t0937993806@gmail.com</Text>
                      </DataList.Value>
                    </DataList.Item>
                  </DataList.Root>
                </Flex>
              </Box>
            </Flex>
          </Box>
          <Box width="15%" style={{ border: 'solid 0px gray' }}></Box>
          <Box width="100%" height="80vh" style={{ border: 'solid 0px white' }}>
            <Flex direction="column">
              <Box width="100%"  height="100%" style={{border: 'solid 0px red'}}>
                <AspectRatio ratio={16 / 8}>
                  <img
                    src="./logbg.jpg"
                    alt="A house in a forest"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      borderRadius: "var(--radius-2)",
                    }}
                  />
                </AspectRatio>
              </Box>
              {/* <GitHubLogoIcon  /> */}
            </Flex>
          </Box>
        </Flex>
      </Container>
    </>
  )
}

export default HomePage