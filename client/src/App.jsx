import "./App.css";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Command } from "@/components/ui/command";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [filter, setFilter] = useState("filter");
  const [search, setSearch] = useState("");
  const [logData, setLogData] = useState([]);
  // handling filters
  const handleFilters = (value) => {
    setFilter(value);
  };

  // handle search
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  // ******************************************************
  useEffect(() => {
    async function logs() {
      try {
        const data = await axios.get(
          `http://localhost:3000/logs?search=${filter}&message=${search}`
        );

        if (data.data.length != 0) {
          setLogData([...logData, data.data[0]]);
          console.log(logData);
        }
      } catch (error) {
        console.log(error);
      }
    }

    logs();
  }, [search, filter]);

  // *****************************************************

  return (
    <div>
      <div className="flex justify-center">
        <DropdownMenu className="bg-primary">
          <DropdownMenuTrigger>{filter}</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => handleFilters("level")}>
              level
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleFilters("message")}>
              message
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleFilters("resourceId")}>
              resourceId
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleFilters("timestamp")}>
              timestamp
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleFilters("traceId")}>
              traceId
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleFilters("spanId")}>
              spanId
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleFilters("commit")}>
              commit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleFilters("parentResourceId")}>
              parentResourceId
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Command className="ml-10">
          <input
            placeholder="Select a filter and search..."
            onChange={handleInputChange}
            className="text-black px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </Command>
      </div>

      <div>
        <ul>
          {logData.map((data) => (
            <div className="mt-10">
              <Card>
                <CardHeader>
                  <CardTitle>Search result</CardTitle>
                </CardHeader>
                <CardContent>
                  <li>Level: {data.level}</li>
                  <li>Message: {data.message}</li>
                  <li>Resource ID: {data.resourceId}</li>
                  <li>Trace ID: {data.traceId}</li>
                  <li>Span ID: {data.spanId}</li>
                  <li>Commit: {data.commit}</li>
                  <li>Parent Resource ID: {data.metadata.parentResourceId}</li>
                </CardContent>
              </Card>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
