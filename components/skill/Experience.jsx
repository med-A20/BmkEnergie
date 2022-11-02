import React from "react";
import {
  Group,
  HoverCard,
  Text,
} from "@mantine/core";

const Experience = ({ experience }) => {
  return (
    <>
      {experience?.map((exp, key) => {
        return (
          <div
            key={key}
            className="w-full flex flex-row justify-center items-start m-5"
          >
            {/* years */}
            <div className="pr-6">
              <p className="text-xl font-medium text-blue italic">
                {exp.start.slice(0, 4)} - {exp.end.slice(0, 4)}
              </p>
            </div>
            {/* loop over jobs */}
            <div className="flex-grow">
              {exp.jobs.map((job, key) => {
                return (
                  // <div key={key}
                  // className="mb-2 cursor-pointer"
                  // >
                  //   <p className="text-xl text-black font-bold">{job.name}</p>
                  //   <p className="text-sm ">{job.company}</p>
                  // </div>
                  <Group key={key} position="left" color="#333" mb={15}>
                    <HoverCard width={280} shadow="md">
                      <HoverCard.Target>
                        <div key={key} className="mb-2 cursor-pointer">
                          <p className="text-xl capitalize text-black font-bold">
                            {job?.name}
                          </p>
                          <p className="text-sm ">{job?.company}</p>
                        </div>
                      </HoverCard.Target>
                      <HoverCard.Dropdown style={{
                        width : `18rem`
                      }}>
                        <Text size="sm">{job?.details}</Text>
                      </HoverCard.Dropdown>
                    </HoverCard>
                  </Group>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Experience;
