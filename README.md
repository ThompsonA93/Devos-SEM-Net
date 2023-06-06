# Devos-W3Serv


| Environment      | Version          |
| ---------------- | ---------------- |
| Operating System | Ubuntu 22.04 LTS |
| GraphDB          | 10.2.1-1         |




## Installation
Manually download [GraphDB](https://www.ontotext.com/products/graphdb/). It is freeware, but requires registration for some reason.
Public packages are not available for automated fetch.

## Execution

Run GraphDB via Icon.
The DB is per default available via port 7200. Then route to the workbench.

Within the workbench, select ```Setup```, ```Repositories```, ```Create new repository```.

Then ```connect repository``` (Icon to the left) to startup the repository.


### SPARQL
Within the Workbench, select ```SPARQL```.

There, create, read, update or delete as necessary.
Refer to graphdb/*.rq for basic idea.

For REST-API access, use the endpoint ```/repositories/{repositoriesID}```, with a query field that requests the data as SPARQL-Query.
The response yields an .srx file:
```sql
<?xml version='1.0' encoding='UTF-8'?>
<sparql xmlns='http://www.w3.org/2005/sparql-results#'>
	<head>
		<variable name='o'/>
	</head>
	<results>
		<result>
			<binding name='o'>
				<uri>http://schema.org/Person</uri>
			</binding>
		</result>
		<result>
			<binding name='o'>
				<literal>Ash</literal>
			</binding>
		</result>
		<result>
			<binding name='o'>
				<literal>Ketchum</literal>
			</binding>
		</result>
		<result>
			<binding name='o'>
				<literal>Japan</literal>
			</binding>
		</result>
		<result>
			<binding name='o'>
				<literal>0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5</literal>
			</binding>
		</result>
	</results>
</sparql>
```

## Troubleshooting / Errors
