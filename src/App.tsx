import MarkdowmComponent from "./components/MarkdownComponent";
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { Flex } from "@radix-ui/themes";

function App() {
  return (
    <>
      <Flex gap="4" direction="column">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Documents" element={<MarkdowmComponent />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Flex>

    </>
  )
}

export default App
