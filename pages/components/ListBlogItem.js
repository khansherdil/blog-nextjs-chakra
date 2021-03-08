import React from "react";
import Link from "next/link";
import { Text, Heading, Divider, Box } from "@chakra-ui/react";
import { format, parseISO, add } from "date-fns";

const ListBlogItem = ({ slug, title, date, content }) => {
  return (
    <Box key={slug}>
      <Link href={`/blog/${slug}`}>
        <Heading cursor="pointer">{title}</Heading>
      </Link>
      <Divider />
      <Text color="gray.600" fontSize="sm" mb={3}>
        {format(parseISO(date), "MMM do, uuu")}
      </Text>
      <Text>{content}</Text>
    </Box>
  );
};

export default ListBlogItem;
