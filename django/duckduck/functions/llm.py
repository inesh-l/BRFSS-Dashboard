from openai import OpenAI, AssistantEventHandler

client = OpenAI(
    api_key="",
)

class LLMConnector:
    def __init__(self):
        

        # Add the file to the assistant
        self.assistant = client.beta.assistants.create(
            name="DB Assistants",
            instructions="You are a professional data scientist. I will provide you with a description of a dataset, which includes labels (descriptions of variables) and SAS variable names (as they appear in the dataset file). Your task is to understand the dataset thoroughly. Based on my question, identify the top four relevant variables in bullet points.",
            model="gpt-3.5-turbo",
            tools=[{"type": "file_search"}],
            tool_resources={"file_search": {"vector_store_ids": ["vs_Tr4rDMWooDL9tl5UZaTyuFM4"]}}
        )

        # Create a new thread
        


    def run(self, query):
        print(query)

        self.thread = client.beta.threads.create()
        # Create a message in the thread
        message = client.beta.threads.messages.create(
            thread_id=self.thread.id,
            role="user",
            content=query,
        )
        # # Run the assistant
        run = client.beta.threads.runs.create_and_poll(
            thread_id=self.thread.id,
            assistant_id=self.assistant.id,
        )
        print("Run created\n")
        print(run.status)
        messages = list(client.beta.threads.messages.list(thread_id=self.thread.id, run_id=run.id))
        message_content = messages[0].content[0].text
        annotations = message_content.annotations
        citations = []
        print(message_content)
        for index, annotation in enumerate(annotations):
            message_content.value = message_content.value.replace(annotation.text, f"[{index}]")
            if file_citation := getattr(annotation, "file_citation", None):
                cited_file = client.files.retrieve(file_citation.file_id)
                citations.append(f"[{index}] {cited_file.filename}")

        print(message_content.value)
        return(message_content.value)
        

