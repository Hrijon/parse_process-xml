#!/usr/bin/perl -w 
use strict;
use XML::DOM; 

my $course_file= shift;
 
my $parser = new XML::DOM::Parser;

my $course = $parser->parsefile($course_file); 

my @units = $course->getElementsByTagName("unit");

foreach my $u (@units)
{
	foreach my $child ($u->getChildNodes)
	{
		if ($child->getNodeName eq "lecturer")
		{
			$u->removeChild($child);
		}
	} 
}

print $course->toString;

